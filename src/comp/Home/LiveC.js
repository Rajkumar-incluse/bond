import live from "../../constants/live";

function LiveC() {
  return (
    <section className="live dfc h-full border-r border-[rgba(255,255,255,.3)] overflow-y-hidden">
      <div className="df py-2 px-6 border-b border-[rgba(255,255,255,.3)]">
        <h1 className="flex-auto text-xl font-medium text-center">Live Market</h1>

        <div className="df">
          <span className="w-4 h-4 rounded-full bg-emerald-400"></span>
          <p>Market Open</p>
        </div>
      </div>

      <div className="scroll-y">
        <table className="w-full table-fixed">
          <thead>
            <tr className="sticky top-0 text-sm bg-slate-900 shadow-[0_1px_3px_0_rgba(255,255,255,.1)] z-1">
              <td className="px-4 py-2">Bond Details</td>
              <td className="px-4 py-2">Coupon Rate</td>
              <td className="px-4 py-2">Face Value</td>
              <td className="px-4 py-2">LTP</td>
              <td className="px-4 py-2">Credit Rating</td>
              <td className="px-4 py-2">Maturity Date</td>
              <td className="px-4 py-2 text-center">Bid Price</td>
              <td className="px-4 py-2 text-center">Ask Price</td>
            </tr>
          </thead>

          <tbody>
            {
              live.map((li, i) => (
                <tr key={i} className="hover:bg-[rgba(255,255,255,.1)] cursor-pointer group">
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100">
                    <div>
                      <p className="mb-0.5">{li.details.name}</p>
                      <p className="w-fit text-xs border border-emerald-700">
                        <span className="px-1 py-0.5 font-light bg-emerald-400 text-white">CPN</span>
                        <span className="px-2 py-0.5">{li.details.cpn}</span>
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.couponRate} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.facevalue} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.ltp} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.creditRating} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.maturityDate} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center">
                    <button className="w-20 px-3 py-1.5 rounded border border-emerald-600">
                      {li.bidPrice}
                    </button>
                  </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center">
                    <button className="w-20 px-3 py-1.5 rounded border border-yellow-600">
                      {li.askPrice}
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default LiveC