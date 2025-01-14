import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { FakeClient } from "@/client/fakeClient";
import ForBuyersSection from "@/components/specific/ForBuyersSection";

jest.mock("@/client/fakeClient", () => {
  return {
    FakeClient: jest.fn().mockImplementation(() => ({
      getBlogPosts: jest.fn(),
    })),
  };
});

jest.mock("@/components/common/CardBlogContentPreview", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="card-blog-preview" />),
}));

describe("ForBuyersSection Component", () => {
  const mockGetBlogPosts = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (FakeClient as jest.Mock).mockImplementation(() => ({
      getBlogPosts: mockGetBlogPosts,
    }));
  });

  it("handles errors during blog data fetch", async () => {
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    mockGetBlogPosts.mockRejectedValueOnce(new Error("Failed to fetch blog posts"));

    render(<ForBuyersSection />);

    await waitFor(() => {
      expect(mockGetBlogPosts).toHaveBeenCalledTimes(1);
      expect(consoleErrorSpy).toHaveBeenCalledWith("Error fetching blog data", expect.any(Error));
    });

    consoleErrorSpy.mockRestore();
  });

  it("renders no blog posts if the fetched data is empty", async () => {
    mockGetBlogPosts.mockResolvedValueOnce([]);

    render(<ForBuyersSection />);

    await waitFor(() => {
      expect(mockGetBlogPosts).toHaveBeenCalledTimes(1);
    });

    expect(screen.queryByTestId("card-blog-preview")).not.toBeInTheDocument();
  });
});
