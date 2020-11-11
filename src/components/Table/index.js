const Table = ({ columns, data }) => (
  <>
    <table className="min-w-full overflow-hidden border-b border-gray-200 shadow divide-y divide-gray-200 sm:rounded-lg">
      <thead className="font-medium tracking-wider text-left text-gray-500 uppercase leading-4">
        <th className="px-6 py-3 text-xs">title</th>
        <th className="px-6 py-3 text-xs" aria-label="options" />
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr className="text-sm text-gray-500 whitespace-no-wrap leading-5">
          <td className="px-6 py-4">
            titulo
          </td>
          <td className="px-6 py-4 font-medium text-right">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
          </td>
        </tr>
      </tbody>
    </table>
    <style jsx>
      {`
      thead {
        background: #f9fafb;
      }
    `}
    </style>
  </>
)

export default Table
