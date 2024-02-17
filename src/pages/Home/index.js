import React, { useContext } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import InputContainer from "../../components/InputContainer";
import List from "../../components/List";
import { TaskManagement } from "../../utils/taskManagement";
import "./styles.scss";

export default function Home() {
  const { data, onDragEnd } = useContext(TaskManagement);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="app" type="list" direction="horizontal">
        {(provided) => (
          <div
            className="wrapper"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {data.listIds.map((listId, index) => {
              const list = data.lists[listId];

              return <List list={list} key={listId} index={index} />;
            })}
            <div>
              <InputContainer type="list" />
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
