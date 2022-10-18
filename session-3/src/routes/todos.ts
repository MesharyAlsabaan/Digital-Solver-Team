import { Router } from "express";
import {
  getAlltoDos,
  getById,
  updateId,
  addId,
  deleteId,
  getTest
} from "../controllers/todos";

const router = Router();

router.get("/test", getTest);

router.get("/", function (req, res) {
  getAlltoDos(req, res);
});

router.get("/:id", function (req, res) {
  getById(req, res);
});


router.put("/:id", function (req, res) {
  updateId(req, res);
});

router.post("/", function (req, res) {
  console.log(req.body);
  
  addId(req, res);
});

router.delete("/:id", function (req, res) {
  deleteId(req, res);
});

export default router;
