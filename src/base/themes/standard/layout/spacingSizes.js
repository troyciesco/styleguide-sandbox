// Remember: root is set to 10px, or 1.0rem
// These are based off the fibonacci sequence currently
// Different combinations of these sizes can be achieved with different margin/padding vals on neighboring components, or by setting style manually (shouldn't happen often)
import { css } from "styled-components"

const spaces = {
	none: "0",
	bump: "0.4rem",
	xxs: "0.8rem",
	xxsBump: "1.2rem",
	xs: "1.6rem",
	xsBump: "2.0rem",
	sm: "2.4rem",
	smBump: "2.8rem",
	md: "3.2rem",
	mdBump: "3.6rem",
	lg: "4.0rem",
	xl: "4.8rem",
	xxl: "5.6rem",
}

export const spacingSizes = css`
	padding: ${props => (props.pad && !props.pad.endsWith("px") ? spaces[props.pad] : props.pad)};
	padding-top: ${props => (props.pt && !props.pt.endsWith("px") ? spaces[props.pt] : props.pt)};
	padding-right: ${props => (props.pr && !props.pr.endsWith("px") ? spaces[props.pr] : props.pr)};
	padding-bottom: ${props => (props.pb && !props.pb.endsWith("px") ? spaces[props.pb] : props.pb)};
	padding-left: ${props => (props.pl && !props.pl.endsWith("px") ? spaces[props.pl] : props.pl)};
	margin: ${props => (props.mar && !props.mar.endsWith("px") ? spaces[props.mar] : props.margin)};
	margin-top: ${props => (props.mt && !props.mt.endsWith("px") ? spaces[props.mt] : props.mt)};
	margin-right: ${props => (props.mr && !props.mr.endsWith("px") ? spaces[props.mr] : props.mr)};
	margin-bottom: ${props => (props.mb && !props.mb.endsWith("px") ? spaces[props.mb] : props.mb)};
	margin-left: ${props => (props.ml && !props.ml.endsWith("px") ? spaces[props.ml] : props.ml)};
`

export default spacingSizes
