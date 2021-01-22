function MostraGIF(props) {
  console.log(props)
  return (
    <img
      src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif"
      alt="GIF" onClick = {props.desaparecer}
      
    />
  );
}

export default MostraGIF;
