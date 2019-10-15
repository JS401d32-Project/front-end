import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to CaseHawk!</h1>
      <Link to="/casePage">CasePage</Link>
    </div>
  );
}
