import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import SearchGet from "./SearchGet";

describe("SearchGet", () => {
  it("fetches data correctly", async () => {
    const mock = new MockAdapter(axios);

    const mockData = [
      { name: "파", unit: "단" },
      { name: "파", unit: "g" },
      { name: "양파", unit: "g" },
      { name: "식용유", unit: "mL" },
    ];
    mock.onGet("/ingredient/unit").reply(200, mockData);

    // 컴포넌트 렌더링
    render(<SearchGet />);

    // 로딩 텍스트가 보이는지 확인
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // API 호출이 완료될 때까지 기다림
    await waitFor(() => {
      // 각 데이터 항목이 화면에 표시되는지 확인
      mockData.forEach((item) => {
        // 텍스트 매처 함수를 사용하여 텍스트가 포함된 요소를 찾음
        expect(
          screen.getByText((text) => text.includes(item.name)),
        ).toBeInTheDocument();
        expect(
          screen.getByText((text) => text.includes(item.unit)),
        ).toBeInTheDocument();
      });
    });
  });
});
