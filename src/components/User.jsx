import './User.css';

function User({ imagem, nome, idade, genero, email, telefone, empresa, cargo, cidade }) {
  return (
    <div className="user-card">
      <div className="user-header">
        <img src={imagem} alt={nome} className="user-imagem" />
        <div>
          <h2>{nome}</h2>
          <p>{idade} anos | {genero}</p>
        </div>
      </div>

      <hr />

      <div className="user-info">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Telefone:</strong> {telefone}</p>
        <p><strong>Empresa:</strong> {empresa}</p>
        <p><strong>Cargo:</strong> {cargo}</p>
        <p><strong>Cidade:</strong> {cidade}</p>
      </div>
    </div>
  );
}

export default User;