import classNames from "classnames";
import { FC, ReactNode } from "react";

import { KEY_VALUES } from "constant";
import { useCalculatorContext } from "context";
import { KeyType } from "types";
import Image from "next/image";

const special2path: { [key: string]: string } = {
  "+": "Add.png",
  "-": "Subtract.png",
  x: "Multiply.png",
  "/": "Divide.png",
  "=": "Equal.png",
};

const Keyboard = () => {
  return (
    <section className="h-[55vh] min-h-[340px] max-h-[480px] grid grid-cols-4 gap-4 sm:gap-[2.5vh] p-4 sm:p-6 bg-skin-keypad w-full rounded-xl">
      {KEY_VALUES.map((value, index) => {
        if (value in special2path) {
          return (
            <div
              key={index}
              className="relative flex justify-center items-center h-16 w-full hover:brightness-150 hover:cursor-pointer"
            >
              <Key key={index} value={value}>
                <Image
                  src={`/${special2path[value]}`}
                  alt={value}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Key>
            </div>
          );
        }
        return <Key key={index} value={value} />;
      })}
    </section>
  );
};

interface IKeyProps {
  children?: ReactNode | ReactNode[];
  value: KeyType;
}

const Key: FC<IKeyProps> = ({ children, value }) => {
  const { handleKeyPress } = useCalculatorContext();

  const isEqualKey = value === "=";
  const isResetOrEqualKey = ["=", "reset"].includes(value);
  const isResetOrDelKey = ["del", "reset"].includes(value);

  return (
    <button
      className={classNames(
        "bg-skin-key-muted text-skin-primary shadow-muted rounded-lg text-4xl hover:brightness-150 h-16",
        {
          "bg-skin-key-secondary text-skin-equal shadow-secondary": isEqualKey,
          "col-span-2": isResetOrEqualKey,
          "uppercase bg-skin-key-primary text-skin-secondary shadow-primary text-xl":
            isResetOrDelKey,
        }
      )}
      onClick={() => handleKeyPress(value)}
    >
      {children || value}
    </button>
  );
};

export { Keyboard };
