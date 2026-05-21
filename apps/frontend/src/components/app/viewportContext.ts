import { createContext } from "react";
import type { ValidViewports } from "./views/useViewport";

type viewportContext = {
	viewportComponent: React.FC;
	setViewport: (viewport: ValidViewports) => void;
};

const ViewportContext = createContext<viewportContext | undefined>(undefined);

export default ViewportContext;
