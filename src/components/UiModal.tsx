import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, ReactNode } from "react";

interface Props {
  size?: "base" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  title?: string;
  maxWidth?: string;
  opened: boolean;
  close: () => void;
  children: ReactNode;
}
export default function UiModal({
  title,
  close,
  size = "lg",
  opened,
  children,
}: Props) {
  function modalSize(size: string): string {
    const sizeClasses: Record<string, string> = {
      base: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
    };

    return sizeClasses[size] || "max-w-lg";
  }

  return (
    <div className="">
      <Transition appear show={opened} as={Fragment}>
        <Dialog as="div" open={opened} onClose={close}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </TransitionChild>
          <div className="fixed inset-0 z-[50] overflow-y-auto bg-black/60">
            <div className="relative flex min-h-screen w-full items-center justify-center px-4">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel
                  className={`panel my-8 w-full ${modalSize(
                    size
                  )} rounded-lg border-0 p-0 text-black dark:text-white-dark bg-white`}
                >
                  <div className="flex  justify-between px-5 py-3 md:py-4">
                    <h3 className="font-bold md:text-lg">{title}</h3>
                    <button
                      type="button"
                      className="text-black/70 hover:text-black p-2 rounded-full shadow hover:shadow-lg z-[50]"
                      onClick={close}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentcolor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="px-5 md:px-8 pb-3">{children}</div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
