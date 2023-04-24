import './CanvasContainer.css';

interface ContainerProps {
  name: string;
}

const CanvasContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <canvas width={300} height={300}></canvas>
    </div>
  );
};

export default CanvasContainer;
