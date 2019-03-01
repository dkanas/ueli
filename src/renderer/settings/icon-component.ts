import Vue from "vue";
import { IconType } from "../../common/icon/icon-type";
import { Icon } from "../../common/icon/icon";
import { IconHelpers } from "../../common/icon/icon-helpers";

export const iconComponent = Vue.extend({
    data() {
        return {
            iconTypeSvg: IconType.SVG,
            iconTypeUrl: IconType.URL,
        };
    },
    methods: {
        getIcon(icon: Icon) {
            if (IconHelpers.isValidIcon(icon)) {
                return icon;
            } else {
                return this.defaulticon;
            }
        },
    },
    props: ["icon", "defaulticon"],
    template: `
        <div class="settings-table__icon-container">
            <img v-if="getIcon(icon).type === iconTypeUrl" :src="getIcon(icon).parameter" class="settings-table__icon-url">
            <div v-else="getIcon(icon).type === iconTypeSvg" v-html="getIcon(icon).parameter" class="settings-table__icon-svg"></div>
        </div>
    `,
});
