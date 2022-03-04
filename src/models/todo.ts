import mongoose from "mongoose";

interface ITodo {
  title: string;
  description: string;
}

interface todoModelInterface extends mongoose.Model<TodoDoc> {
  build(attr: ITodo): any;
}

interface TodoDoc extends mongoose.Document {
  title: string;
  description: string;
}

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

todoSchema.statics.build = (attr: ITodo) => new ToDo(attr);

const ToDo = mongoose.model<TodoDoc, todoModelInterface>("Todo", todoSchema);

ToDo.build({
  title: "Some Text",
  description: "Some Description",
});

export { ToDo };
