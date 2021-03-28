import React from "react";
import ReadExcell from "../services/excelService";

let result = null;
export default function Table() {
  return (
    <div>
      {/* dosyayi almak icin input olusturulur. */}
      <input
        type="file"
        onChange={(event) => {
          const file = event.target.files[0];
          let data = ReadExcell(file);
          data.then((pData) => {
            pData.map((person) => {
              document.querySelector("#table").innerHTML += `<tr>
              <td>${person.ISIM}</td>
              <td>${person.SOYISIM}</td>
              <td>${person.YAS}</td>
              <td>${person.ALDIGI_MAAS}</td>
              <td>${person.CINSIYETI}</td>
              </tr>`;
            });
          });
        }}
      ></input>
      <table>
        <thead>
          <th>ISIM</th>
          <th>SOYISIM</th>
          <th>YAS</th>
          <th>ALDIGI MAAS</th>
          <th>CINSIYETI</th>
        </thead>
        <tbody id="table"></tbody>
      </table>
    </div>
  );
}
