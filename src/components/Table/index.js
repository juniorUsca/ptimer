/**
 * @param {object} props
 * @param {text} props.text
 */
const TextField = ({ text }) => (
  <td className="px-6 py-4">
    {text}
  </td>
)

/**
 * @param {object} props
 * @param {string} props.src
 * @param {string} props.alt
 * @param {boolean} props.round
 */
const ImageField = ({ src, alt = '', round = true }) => {
  const defaultSrc = 'https://img2.pngio.com/index-of-areaedu-wp-content-uploads-2016-02-default-png-600_600.png'
  return (
    <td className="px-6 py-4">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-10 h-10">
          <img className={`w-10 h-10 ${round ? 'rounded-full' : ''}`} src={src || defaultSrc} alt={alt} />
        </div>
      </div>
    </td>
  )
}

/**
 * @param {object} props
 * @param {Array<objet>} props.columns
 * @param {Array<object>} props.data
 * @param {function} props.handleClick
 */
const Table = ({ columns, data, handleClick }) => (
  <>
    <table className="min-w-full overflow-hidden border-b border-gray-200 shadow divide-y divide-gray-200 sm:rounded-lg">
      <thead className="font-medium tracking-wider text-left text-gray-500 uppercase leading-4">
        <tr>
          {columns.map(col => (
            <th key={col.name} className="px-6 py-3 text-xs">{col.title}</th>
          ))}
          <th className="px-6 py-3 text-xs" aria-label="options" />
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map(row => (
          <tr key={row.id} className="text-sm text-gray-500 whitespace-no-wrap leading-5">
            {columns.map(col => {
              if (col.type === 'image') return <ImageField key={col.name} src={row[col.name]} alt={col.alt ? row[col.alt] : ''} round={col.round} />
              return <TextField key={col.name} text={row[col.name]} />
            })}
            <td className="px-6 py-4 font-medium text-right">
              <button type="button" className="text-indigo-600 hover:text-indigo-900" onClick={() => handleClick(row.id)}>Edit</button>
            </td>
          </tr>
        ))}
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
