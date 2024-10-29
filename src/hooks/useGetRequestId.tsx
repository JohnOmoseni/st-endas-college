import { publicApiWebsite2 } from "@/server/req/requestApis";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useCallback, useState } from "react";
import { toast } from "sonner";

export function useGetRequestId(): any {
	const [hasFetched, setHasFetched] = useState(false);

	const { isLoading, refetch } = useQuery({
		queryKey: ["getRequestId"],
		queryFn: () => publicApiWebsite2.getRequestId(),
		enabled: false,
	});

	const fetchRequestId = useCallback(() => {
		const storedRequestId = localStorage.getItem("REQUEST_ID");
		if (!storedRequestId && !hasFetched) {
			refetch().then((res) => {
				if (res.data?.request_id) {
					localStorage.setItem("REQUEST_ID", res?.data?.request_id);
					setHasFetched(true);
				} else {
					toast.error("Error generating Request ID");
				}
			});
		}
	}, [hasFetched, refetch]);

	useEffect(() => {
		if (!hasFetched) {
			fetchRequestId();
		}
	}, [fetchRequestId, hasFetched]);

	const handleClick = useCallback(() => {
		const storedRequestId = localStorage.getItem("REQUEST_ID");
		if (!storedRequestId) {
			fetchRequestId();
		}
	}, [fetchRequestId]);

	return { isLoading, handleClick };
}

// Offline support
// navigator.serviceWorker.ready.then((registration) => {
//   registration.sync.register("requestId").then(() => {
//     console.log("Request ID synced successfully");
//   });
// });
