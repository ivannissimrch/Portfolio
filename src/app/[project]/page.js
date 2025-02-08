"use client";
import React from "react";
export default function ProjectPage({ params }) {
  const { project } = React.use(params);

  return <p>Project {project}</p>;
}
