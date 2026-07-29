"use client";

import { useEffect, useState } from "react";

export function useDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const response = await fetch("/api/admin/dashboard");

        const json = await response.json();

        setData(json);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  return {
    data,
    loading,
  };
}
