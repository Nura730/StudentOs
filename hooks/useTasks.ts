import { useEffect } from "react";
import { useTaskStore } from "../src/store/taskStore";

export function useTasks() {
    const store = useTaskStore();

    useEffect(() => {
        store.loadTasks();
    }, []);

    return store;
}