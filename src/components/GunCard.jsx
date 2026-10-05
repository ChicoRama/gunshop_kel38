function GunCard({ gun }) {
  return (
    <li className="card">
      <div className="card-img">
        <img src={gun.image} alt={gun.name} />
      </div>
      <div className="card-body">
        <h3>{gun.name}</h3>
        <p className="spec">
          {gun.type} &middot; {gun.caliber}
        </p>
        <p className="desc">{gun.description}</p>
        <strong className="price">${gun.price.toLocaleString('en-US')}</strong>
      </div>
    </li>
  )
}

export default GunCard
