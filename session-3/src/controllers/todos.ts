import express from "express";

let ids = [
  { name: "ahmed", id: "1" },
  { name: "khaled", id: "2" },
  { name: "ziyad", id: "3" },
];

export function getTest(req: express.Request, res: express.Response) {
  res.send("testing...");
}

export function getAlltoDos(req: express.Request, res: express.Response) {
  res.send("Hello this is all to dos");
}

export function getById(req: express.Request, res: express.Response) {
  let id = req.params.id;

  for (let i = 0; i < ids.length; i++) {
    if (id == ids[i].id) {
      res.send(ids[i].name);
    }
  }
  res.send("not found");
}

export function updateId(req: express.Request, res: express.Response) {
  const id = req.params.id;
  const { name } = req.body;
  const updatedObj = {
    id: id,
    name: name,
  };
  for (let i = 0; i < ids.length; i++) {
    if (id == ids[i].id) {
      ids[i] = updatedObj;
    }
  }
  res.send(ids);
}
export function addId(req: express.Request, res: express.Response) {
  const { id, name } = req.body;
  console.log(req.body);

  const obj = {
    id: id,
    name: name,
  };

  ids.push(obj);

  console.log(obj);
  res.send(ids);
}
export function deleteId(req: express.Request, res: express.Response) {
  let id = req.params.id;
  for (let i = 0; i < ids.length; i++) {
    if (id == ids[i].id) {
      ids.splice(i, 1);
    }
  }

  res.send(ids)
}

// module.exports = {
//     getAlltoDos

// }
