import React, { useEffect, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button-1";
import clsx from "clsx";
import { Drawer } from "@/components/ui/drawer";
import { Material } from "@/components/ui/material-1";
import useBreakpoints from "@/components/ui/use-breakpoints";

interface ModalProps {
  active: boolean;
  onClickOutside: () => void;
  children: React.ReactNode;
  sticky?: boolean;
  initialFocusRef?: React.RefObject<HTMLButtonElement> | React.RefObject<null>;
  className?: string;
}

interface ModalBodyProps {
  children: React.ReactNode;
  sticky?: boolean;
  className?: string;
}

interface ModalHeaderProps {
  children: React.ReactNode;
  sticky?: boolean;
}

const ModalModal = ({ active, onClickOutside, children, sticky, initialFocusRef, className }: ModalProps) => {
  const focusRef = useRef<HTMLButtonElement | null>(null);
  const { isMobile, isDesktop, ready } = useBreakpoints();

  useLayoutEffect(() => {
    if (active) {
      if (initialFocusRef?.current) {
        initialFocusRef.current.focus();
      } else {
        if (focusRef.current) {
          focusRef.current.focus();
        }
      }
    }
  }, [active, initialFocusRef?.current]);

  useEffect(() => {
    if (!active) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClickOutside();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active, onClickOutside]);

  const childrenArray = React.Children.toArray(children);

  const footer = childrenArray.find(
    (child) =>
      React.isValidElement(child) &&
      child.type === ModalActions
  );

  const enhancedFooter = React.isValidElement<{ children: React.ReactNode }>(footer)
    ? React.cloneElement(footer, {
      children: React.Children.map(footer.props.children, (child, index) => {
        if (index === 0 && React.isValidElement<ButtonProps>(child)) {
          return React.cloneElement(child, {
            ref: focusRef
          });
        }
        return child;
      })
    })
    : null;

  // Scroll lock
  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [active]);

  // Avoid rendering before breakpoints are ready to prevent Drawer/Modal flashing
  if (!ready) {
    return null;
  }

  return (
    <>
      {isMobile && (
        <Drawer onDismiss={onClickOutside} show={active}>
          {React.Children.map(children, (child) =>
            (child as React.ReactElement)?.type === Modal.Body
              ? React.cloneElement(child as React.ReactElement<ModalBodyProps>, { sticky })
              : child
          )}
        </Drawer>
      )}
      {isDesktop && (
        <motion.div
          className={clsx(
            "fixed inset-0 z-[99999] flex items-center justify-center backdrop-blur-sm",
            active ? "pointer-events-auto" : "pointer-events-none"
          )}
          onClick={onClickOutside}
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.95, y: active ? 0 : 20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 1
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Material
              type="modal"
              className={clsx(
                "flex flex-col font-sans text-gray-1000 max-h-[min(800px,_85vh)] overflow-y-auto shadow-2xl border border-white/20 bg-white rounded-2xl",
                className || "w-[600px]"
              )}
            >
              {React.Children.map(children, (child) =>
                (child as React.ReactElement)?.type === Modal.Body
                  ? React.cloneElement(child as React.ReactElement<ModalBodyProps>, { sticky })
                  : ((child as React.ReactElement)?.type === ModalActions && !initialFocusRef) ? enhancedFooter : child
              )}
            </Material>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

const ModalBody = ({ children, sticky, className }: ModalBodyProps) => (
  <div className={clsx("overflow-y-auto text-sm", sticky ? "px-6 pb-6" : "p-8", className)}>
    {React.Children.map(children, (child) =>
      (child as React.ReactElement)?.type === Modal.Header
        ? React.cloneElement(child as React.ReactElement<ModalHeaderProps>, { sticky })
        : child
    )}
  </div>
);
const ModalHeader = ({ children, sticky }: ModalHeaderProps) => (
  <header className={clsx(
    "mb-6 rounded-t-xl", sticky && "sticky top-0 bg-background-200 border-b border-gray-alpha-400 pt-5 px-6 -mx-6"
  )}>
    {children}
  </header>
);
const ModalInset = ({ children }: { children: React.ReactNode }) => (
  <div className="-mx-6 p-6 border-b border-t border-accents-2 bg-accents-1">{children}</div>
);
const ModalTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <h2 className={clsx("mb-2 text-2xl font-serif font-semibold tracking-tight text-trueme-black", className)}>{children}</h2>
);
const ModalSubtitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <p className={clsx("text-base text-trueme-secondary font-light", className)}>{children}</p>
);
const ModalActions = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <footer className={clsx("sticky bottom-0 p-4 flex justify-between shrink-0 bg-background-200 inset-0 border-t border-gray-alpha-400 rounded-b-xl", className)}>
    {children}
  </footer>
);
const ModalAction = (props: ButtonProps) => <Button {...props}>{props.children}</Button>;

export const Modal = {
  Modal: ModalModal,
  Header: ModalHeader,
  Inset: ModalInset,
  Body: ModalBody,
  Title: ModalTitle,
  Subtitle: ModalSubtitle,
  Actions: ModalActions,
  Action: ModalAction
};

