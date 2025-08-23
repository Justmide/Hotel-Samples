import React from 'react';

const NairaSymbol = ({ className = "" }) => {
  return (
    <span className={className}>₦</span>
  );
};

// Format currency function
export const formatNaira = (amount) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export default NairaSymbol;