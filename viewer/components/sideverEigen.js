import React from "react";
import eigenData from "../lib/engenData.json";
import Link from "next/link";
export default function SideverEigen() {
  const [matrix, setMatrix] = React.useState(eigenData.matrix[0]);
  const matrixChange = (e) => setMatrix(e.target.value);
  const [figureName, setFigureName] = React.useState(eigenData.name[0]);
  const figureNameChange = (e) => setFigureName(e.target.value);
  const [damping, setDamping] = React.useState(eigenData.isDamping[0]);
  const dompingChange = (e) => setDamping(e.target.value);
  const [epochNum, setEpochNum] = React.useState(eigenData.epoch_min);
  const epochNumChnage = (e) => setEpochNum(e.target.value);
  const [fileName, setFileName] = React.useState(eigenData.fileNames[0])
  const fileNameChange = (e) => setFileName(e.target.value)
  return (
    <>
      <p>Eigen: {matrix}</p>
      {eigenData.matrix.map((_matrix) => (
        <label key={_matrix}>
          <input
            type="radio"
            value={_matrix}
            onChange={matrixChange}
            checked={matrix === _matrix}
          />
          {_matrix}
        </label>
      ))}
      <p>Name: {figureName}</p>
      {eigenData.name.map((_name) => (
        <label key={_name}>
          <input
            type="radio"
            value={_name}
            onChange={figureNameChange}
            checked={figureName === _name}
          />
          {_name}
        </label>
      ))}
      <p>domping: {damping}</p>
      {eigenData.isDamping.map((_isDamping) => (
        <label key={_isDamping}>
          <input
            type="radio"
            value={_isDamping}
            onChange={dompingChange}
            checked={damping === _isDamping}
          />
          {_isDamping}
        </label>
      ))}
      <div>
        <p>epoch number: {epochNum}</p>
        <input
          type="range"
          value={epochNum}
          onChange={epochNumChnage}
          min={eigenData.epoch_min}
          max={eigenData.epoch_max}
        />
      </div>
      <div>
        <p>file name: {fileName}</p>
        <label key="top">
            <input
            type="radio"
            value=""
            onChange={fileNameChange}
            checked={fileName === ""}
            />
            top
        </label>
        {eigenData.fileNames.map((_fileName) => (
        <label key={_fileName}>
          <input
            type="radio"
            value={_fileName}
            onChange={fileNameChange}
            checked={fileName === _fileName}
          />
          {_fileName}
        </label>
      ))}
      </div>
      <Link href={`/${matrix}/${figureName}/${damping}/epoch${epochNum}#${fileName}`}>この条件の画像を見る</Link>
      <br/>
    </>
  );
}

// return (
//     <>
//     <div>
//         <p>Eigen</p>
//         {
//             eigenData.matrix.map((_matrix) => (
//                 <div key={_matrix}>
//                 <input type="radio" id={_matrix} name="matrix" value={_matrix} /><label for={_matrix}>{_matrix}</label>
//                 </div>
//             ))
//         }
//     </div>
//     <div>
//         <p>name</p>
//         {
//             eigenData.name.map((_name) => (
//                 <input type="radio" id={_name} name="name" value={_name} key={_name}><label for={_name}>{_name}</label></input>
//             ))
//         }
//     </div>
//     <div>
//         <p>domping</p>
//         <input type="radio" id="yes" name="domping" value="yes" key="yes"><label for="yes">yes</label></input>
//         <input type="radio" id="no" name="domping" value="no" key="no"><label for="no">no</label></input>
//     </div>
//     <div>
//         <p>epoch number</p>
//         <input type="range" name="epochNum" min={eigenData.epoch_min} max={eigenData.epoch_max}/>
//     </div>
//     </>
//   )
