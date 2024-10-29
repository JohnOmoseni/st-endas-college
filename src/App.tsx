import QueryProvider from "./providers/QueryProvider";
import MainRouter from "./Router";
import { Toaster } from "./components/ui/sonner";

import "@/styles/utilities.css";
import "@/styles/globals.css";
import "@/styles/index.css";

function App() {
	return (
		<QueryProvider>
			<MainRouter />
			<Toaster
				richColors
				toastOptions={{
					style: { padding: "1rem" },
					className: "my-toast",
				}}
			/>{" "}
		</QueryProvider>
	);
}

export default App;
