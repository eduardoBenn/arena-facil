import { AppRoutes } from "./components/AppRoutes/AppRoutes";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
};

export default App;
