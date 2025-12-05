"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";
import ThemeRegistry from "@/components/ThemeRegistry";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </PersistGate>
    </Provider>
  );
}
