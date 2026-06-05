import { ItemContainer } from "./styles";

const ItemRepo = ({ repo, handleRemoveRepo }) => {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noreferrer" target="_blank">
        Ver repositório
      </a>
      <br />
      <button className="remover" onClick={handleRemove}>
        Remover
      </button>
      <hr />
    </ItemContainer>
  );
};

export default ItemRepo;
