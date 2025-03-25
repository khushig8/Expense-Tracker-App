import { useEffect, useState } from "react";
import {
	collection,
	onSnapshot,
	query,
	QueryConstraint,
} from "firebase/firestore";
import { firestore } from "@/config/firebase";

const useFetchData = <T>(
	collectionName: string,
	constrains: QueryConstraint[] = []
) => {
	const [data, setData] = useState<T[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!collectionName) return;
		const collectionRef = collection(firestore, collectionName);
		const q = query(collectionRef, ...constrains);

		const unsub = onSnapshot(
			q,
			(snapshot) => {
				const fetchData = snapshot.docs.map((doc) => {
					return {
						id: doc.id,
						...doc.data(),
					};
				}) as T[];
				setData(fetchData);
				setLoading(false);
			},
			(error) => {
				console.log("Error fetching data: ", error);
				setError(error.message);
				setLoading(false);
			}
		);

		return () => unsub();
	}, []);

	return { data, loading, error };
};

export default useFetchData;
