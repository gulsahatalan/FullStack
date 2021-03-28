import XLSX from "xlsx";

const ReadExcell = (file) => {
  const promise = new Promise((res, rej) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = (event) => {
      const bufferArray = event.target.result;
      const workBook = XLSX.read(bufferArray, { type: "buffer" });
      const workSheetName = workBook.SheetNames[0];
      const ws = workBook.Sheets[workSheetName];
      const data = XLSX.utils.sheet_to_json(ws);
      res(data);
    };
    fileReader.onerror = (err) => {
      rej(err);
    };
  });
  promise.then((data) => {
    console.log(data);
  });
  return promise;
};

export default ReadExcell;
