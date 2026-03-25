import { useState } from "react";
import "./week3.css";
type DDitem = {
  label: string;
  href: string;
};

type DDprops = {
  items: DDitem[];
};

export default function DropDown({ items }: DDprops) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="DropDownWrapper">
        <button
          className={`ddBtn ${open ? "Close" : "Open"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Open"}
        </button>
        {open && (
          <ul className="dropDownUl">
            {items.map((item) => (
              <li key={item.href}>
                <a className="dropDownA" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
