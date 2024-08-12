import React from "react";

function NextMessage() {
  return (
    <div className=" px-[72px] text-[1rem] bg-[#313338] hover:bg-[#2E3035]">
      <p className="py-[2px] whitespace-normal break-words w-[1200px leading-[1.375rem]]">
        Когда модератор закрывает тикет: Забрать права у обращаемого юзера и
        модератора и выдать для всей поддержки возможность смотреть + муваем в
        closed tickets Когда модератор переоткрывает тикет и был модератор:
        Убираем роль + добавляем модератору видимость + добавляем юзеру
        видимость и муваем в claimed tickets category Когда модератор
        переоткрывает тикет и не было модератора: Оставляем роль + добавляем
        пермишены юзеру и муваем в open tickets
      </p>
    </div>
  );
}

export default NextMessage;
