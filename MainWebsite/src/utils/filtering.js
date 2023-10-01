import dataJson from "../data/data.json";

export default function (filters) {
  return dataJson.filter((job) =>
    filters.every(
      (filter) =>
        job.role === filter ||
        job.level === filter ||
        job.languages.includes(filter) ||
        job.tools.includes(filter) ||
        job.openTo.includes(filter),
    ),
  );
}
