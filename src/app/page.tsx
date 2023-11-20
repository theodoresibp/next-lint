'use client';

import { useState } from 'react';

export default function Page() {
  const [counterState, setCounterState] = useState(0);

  function handleBtnMin() {
    if (counterState === 0) {
      // eslint-disable-next-line no-alert
      alert('Counter already zero!');
      return;
    }

    setCounterState(counterState - 1);
  }

  function handleBtnAdd() {
    setCounterState(counterState + 1);
  }

  return (
    <main className="h-screen bg-slate-900 p-10">
      <div className="relative">
        <div className="absolute -inset-0.5 m-auto flex h-[500px] w-[500px] bg-pink-500 blur" />
        <div className="relative m-auto flex h-[500px] w-[500px] flex-col items-center justify-between rounded bg-slate-300 p-8">
          <h2>Counter App</h2>
          <h1 className="text-5xl text-white">{counterState}</h1>
          <div className="flex w-full justify-between gap-6">
            <button
              type="button"
              className="h-[50px] w-full rounded border-2 bg-red-400 font-bold transition-transform duration-300 hover:scale-110 hover:border-slate-800 hover:bg-white"
              id="btnMin"
              onClick={handleBtnMin}
            >
              Min
            </button>

            <button
              type="button"
              className="h-[50px] w-full rounded border-2 bg-amber-400 font-bold transition-transform duration-300 hover:scale-110 hover:border-slate-800 hover:bg-white"
              id="btnAdd"
              onClick={handleBtnAdd}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
