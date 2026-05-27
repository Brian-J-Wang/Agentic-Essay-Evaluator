import { createContext } from "react";
import type { Viewport, ViewportConfig } from "./views.types";

type viewportContext = {
	setViewport: (viewport: ViewportConfig) => void;
};

const ViewportContext = createContext<viewportContext>({
	setViewport: () => {},
});

export default ViewportContext;
