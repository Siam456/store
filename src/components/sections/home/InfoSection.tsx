import React from 'react';

const data = [
  {
    icon: './icons/box.svg',
    title: 'Free Shipping',
    description: 'Free shipping on order over €50',
  },
  {
    icon: './icons/moneyback.svg',
    title: 'Peace of Mind',
    description: '30 days money back guarantee',
  },
  {
    icon: './icons/secure.svg',
    title: '100% Payment Secure',
    description: 'Your payment are safe with us.',
  },
  {
    icon: './icons/moneyBack.svg',
    title: 'Support 24/7',
    description: '24/7 Online support',
  },
];

export default function InfoSection() {
  return (
    <section className="container my-24 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {data.map((item, index) => (
        <div
          key={`${index + 1}`}
          className="flex items-center gap-8 rounded-lg bg-white p-12"
        >
          <img src={item.icon} alt="info" width={60} height={60} />
          <div>
            <h3 className="text-xl font-semibold">Support 24/7</h3>
            <p className="text-sm">24/7 Online support</p>
          </div>
        </div>
      ))}
    </section>
  );
}
