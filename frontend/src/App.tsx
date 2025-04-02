import React from "react";
// import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserForm from "./components/userForm";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      
      <UserForm/>
      <UserList />
    </QueryClientProvider>
  );
};

export default App;
