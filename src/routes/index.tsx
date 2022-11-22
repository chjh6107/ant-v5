import { Button, Divider, FloatButton, Tooltip } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const IndexPage = () => {
  const [isFloatOpen, setIsFloatOpen] = useState(false);
  return (
    <div className="h-screen w-screen">
      {isFloatOpen && (
        <FloatButton tooltip={() => <Tooltip>{`Tour 예시보러가기`}</Tooltip>} />
      )}
      <main className={`grid place-items-center`}>
        <div className="pt-[100px] w-full">
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
          <div className={`flex items-center flex-col`}>
            <Divider plain>Float</Divider>
            <Button type={"primary"} onClick={() => setIsFloatOpen((p) => !p)}>
              {`Float버튼 ${isFloatOpen ? "비활성화" : "활성화"}`}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
export default IndexPage;
