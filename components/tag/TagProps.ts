export type TagProps = {
    /**
     * The text describing the tag.
     * @default null
     * @type string
     * @example "Tag"
     */
    label: string,
    /**
     * The size of the tag.
     * @default "medium"
     * @type "small" | "medium"
     * @example "small"
     */
    size?: "small" | "medium",
    /**
     * The color of the tag.
     * @default "purple"
     * @type "purple" | "white"
     * @example "white"
     */
    color?: "purple" | "white",
    /**
     * Callback when remove button is clicked.
     * @default () => {}
     * @type function
     * @example () => console.log("remove button clicked")
     */
    onClickRemove?: () => void,
}
