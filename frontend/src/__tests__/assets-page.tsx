import { useQuery } from "@tanstack/react-query";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Assets from "../pages/Assets";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

const mockedUseQuery = useQuery as jest.Mock;

describe("Assets Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading state", () => {
    mockedUseQuery.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });
    render(<Assets />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders error state", () => {
    mockedUseQuery.mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error("Error loading assets"),
    });
    render(<Assets />);
    expect(screen.getByText("Error loading assets")).toBeInTheDocument();
  });

  test("renders data", () => {
    const mockData = {
      data: [
        {
          name: "Bitcoin",
          value: 50000,
          type: "cryptocurrency",
          apr: 5,
          performance: 10,
        },
        {
          name: "Ethereum",
          value: 3000,
          type: "cryptocurrency",
          apr: 4,
          performance: 8,
        },
      ],
      pages: {
        from: 1,
        to: 2,
        total: 2,
        totalPages: 1,
      },
    };
    mockedUseQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    });
    render(<Assets />);
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("Ethereum")).toBeInTheDocument();
  });

  test("handles filter by type", () => {
    mockedUseQuery.mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
    });

    render(<Assets />);
    const filterDropdown = screen.getByLabelText(
      "Filter by type:",
    ) as HTMLSelectElement;
    fireEvent.change(filterDropdown, { target: { value: "stocks" } });
    expect(filterDropdown.value).toBe("stocks");
  });

  test("handles items per page change", () => {
    mockedUseQuery.mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
    });

    render(<Assets />);
    const itemsPerPageDropdown = screen.getByLabelText(
      "Items per page:",
    ) as HTMLSelectElement;
    fireEvent.change(itemsPerPageDropdown, { target: { value: "20" } });
    expect(itemsPerPageDropdown.value).toBe("20");
  });

  test("handles pagination", () => {
    const mockData = {
      data: [
        {
          name: "Bitcoin",
          value: 50000,
          type: "cryptocurrency",
          apr: 5,
          performance: 10,
        },
      ],
      pages: {
        from: 1,
        to: 1,
        total: 1,
        totalPages: 2,
      },
    };
    mockedUseQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    });
    render(<Assets />);
    const nextPageButton = screen.getByText("Next");
    fireEvent.click(nextPageButton);
    expect(mockedUseQuery).toHaveBeenCalledWith({
      queryKey: ["assets", "", "name", "asc", 2, 10],
      queryFn: expect.any(Function),
    });
  });
});
