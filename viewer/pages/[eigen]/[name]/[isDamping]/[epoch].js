import React from "react";
import Image from "next/image";
import { readdirSync } from "fs";
import { join } from "path";
import eigenData from "../../../../lib/engenData.json";
import SideverEigen from "../../../../components/sideverEigen";
export default function PictureRenderer({ fileInfos }) {
  return (
    <>
    <SideverEigen/>
      {fileInfos.map(({path, name}) => (
        <Image
          src={path}
          alt={name}
          layout="fixed"
          width={640}
          height={480}
          quality={5}
          key={name}
          id={name}
        />
      ))}
    </>
  );
}

const makePaths = (eigenData) => {
  let results = new Array();
  eigenData.matrix.forEach((_matrix) => {
    eigenData.name.forEach((_name) => {
      eigenData.isDamping.forEach((_isDamping) => {
        for (
          let epochNum = eigenData.epoch_min;
          epochNum <= eigenData.epoch_max;
          epochNum++
        ) {
          results.push({
            params: {
              eigen: _matrix,
              name: _name,
              isDamping: _isDamping,
              epoch: `epoch${epochNum}`,
            },
          });
        }
      });
    });
  });
  return results;
};
export const getStaticPaths = async () => {
  const paths = makePaths(eigenData);
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params, test }) => {
  console.log(test);
  const figurePath = join(
    process.cwd(),
    "public",
    params.eigen,
    params.name,
    params.isDamping,
    params.epoch
  );
  const fileNames = readdirSync(figurePath);
  const fileInfos = fileNames.map((fileName) => {
    return {
      path: join(
        "/",
        params.eigen,
        params.name,
        params.isDamping,
        params.epoch,
        fileName
      ),
      name: fileName,
    };
  });
  return {
    props: {
        fileInfos
    },
  };
};
