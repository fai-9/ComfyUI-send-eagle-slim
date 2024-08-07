import { app } from "../../../scripts/app.js";

app.registerExtension({
    name: "EagleTools.Send Image to Eagle (fai-9)",
    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        if (nodeData.name === "Send Image to Eagle (fai-9)") {
            const origOnNodeCreated = nodeType.prototype.onNodeCreated;
            nodeType.prototype.onNodeCreated = function () {
                const r = origOnNodeCreated ? origOnNodeCreated.apply(this) : undefined;
                ["positive", "negative", "model_name"].forEach((name) => {
                    this.convertWidgetToInput(this.widgets.find((w) => w.name === name ));
                });
                return r;
            }
        }
    }
});
