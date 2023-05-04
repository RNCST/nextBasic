import Link from 'next/link'

export default function Home() {
  let name = 'letName'
  return (
    <div>
      <h4 className="title">nextFresh</h4>
      {/* <h4 style={{color : 'red', fontSize:'30px'}}>red color </h4> */}
      <p className="title-sub">subtitle by {name}</p>
    </div>
  )
}