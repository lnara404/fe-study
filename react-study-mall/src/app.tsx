import { useRoutes } from "react-router-dom";
import { routes } from './routes';
import { getClient } from './queryClient';
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import Gnb from "./components/gnb";

const App = () => {
  const element = useRoutes(routes);
  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Gnb />
      {element}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default App;