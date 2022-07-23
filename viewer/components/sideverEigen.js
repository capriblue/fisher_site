import React, { useEffect } from "react";
import eigenData from "../lib/engenData.json";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { useLocalStorage } from "../src/hooks";
export default function SideverEigen() {
    // const [matrix, setMatrix] = useLocalStorage(eigenData.matrix[0], "matrix")
  const [matrix, setMatrix] = React.useState(eigenData.matrix[0]);
  const router = useRouter();
  const matrixChange = (e) => {
    setMatrix(e.target.value);
    router.push(
      `/${e.target.value}/${figureName}/${damping}/epoch${epochNum}#${fileName}`
    );
  };
//   const [figureName, setFigureName] = useLocalStorage(eigenData.name[0], "figureName")
  const [figureName, setFigureName] = React.useState(eigenData.name[0]);
  const figureNameChange = (e) => {
    setFigureName(e.target.value);
    router.push(
      `/${matrix}/${e.target.value}/${damping}/epoch${epochNum}#${fileName}`
    );
  };
//   const [damping, setDamping ] = useLocalStorage(eigenData.isDamping[0], "damping")
  const [damping, setDamping] = React.useState(eigenData.isDamping[0]);
  const dompingChange = (e) => {
    setDamping(e.target.value);
    router.push(
      `/${matrix}/${figureName}/${e.target.value}/epoch${epochNum}#${fileName}`
    );
  };
//   const [epochNum, setEpochNum ] = useLocalStorage(eigenData.epoch_min, "epochNum")
  const [epochNum, setEpochNum] = React.useState(eigenData.epoch_min);
  const epochNumChnage = (e) => {
    setEpochNum(e.target.value);

  };
  const epochNumRun = (e) => {
    router.push(
        `/${matrix}/${figureName}/${damping}/epoch${e.target.value}#${fileName}`
      );
  }
//   const [fileName, setFileName] = useLocalStorage(eigenData.fileNames[0], "fileName")
  const [fileName, setFileName] = React.useState(eigenData.fileNames[0]);
  const fileNameChange = (e) => {
    setFileName(e.target.value);
    router.push(
      `/${matrix}/${figureName}/${damping}/epoch${epochNum}#${e.target.value}`
    );
  };
  const saveChange = () => {

        localStorage.setItem("eigenState", JSON.stringify({
          matrix,figureName, damping, epochNum, fileName  
        }))
  }
  const loadChange = () => {
    const eigenState = JSON.parse(localStorage.getItem("eigenState")) || {
        matrix,figureName, damping, epochNum, fileName 
    }
    setMatrix(eigenState.matrix)
    setFigureName(eigenState.figureName)
    setDamping(eigenState.damping)
    setEpochNum(eigenState.epochNum)
    setFileName(eigenState.fileName)
    router.push(
        `/${eigenState.matrix}/${eigenState.figureName}/${eigenState.damping}/epoch${eigenState.epochNum}#${eigenState.fileName}`
      );
    console.log(eigenState)
  }
  const ButtonClick = (e) => {
    router.reload(
        `/${matrix}/${figureName}/${damping}/epoch${epochNum}#${fileName}`
    )
  }
  return (
    <div style={{ position: "sticky", top: 0 }}>
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
        <p>
          epoch number: {epochNum}
        </p>
        <input
          type="range"
          value={epochNum}
          onChange={epochNumChnage}
          onMouseUp={epochNumRun}
          min={eigenData.epoch_min}
          max={eigenData.epoch_max}
        />
        <br />
      </div>
      <div>
        <p>file name: {fileName}</p>
        {eigenData.fileNames.map((_fileName) => (
          <label key={_fileName} style={{ display: "block"}}>
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
      <Button variant="contained" onClick={saveChange}>localStrageに保存</Button>
      <Button variant="contained" onClick={loadChange}>localStrageからload</Button>
      <p>保存すると別のtabでも同じ表示ができます。</p>
      <br />
    </div>
  );
}
