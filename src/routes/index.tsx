import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import { useState, useEffect, startTransition, Suspense } from "react";
const router = createBrowserRouter(routes);
import AppLayout from "../AppLayout";

const AppRouter = () => {
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setIsPending(true);
      setIsPending(false);
    });
  }, []);
  return (
    <AppLayout>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen"></div>
        }
      >
        {isPending ? (
          <div className="flex items-center justify-center min-h-screen"></div>
        ) : (
          <RouterProvider router={router} />
        )}
      </Suspense>
    </AppLayout>
  );
};

export default AppRouter;
