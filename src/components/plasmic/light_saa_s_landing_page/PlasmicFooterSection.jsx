// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dyKzZyeMYu9cu5u9GQgcg2
// Component: l_c1zAsdrtaRQG
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: xoknyxKmeB3HA2/component
import TextInput from "../../TextInput"; // plasmic-import: qeH1lNcEe-Jw8B/component
import { useScreenVariants as useScreenVariantsjgVYFugJqguf7 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: JgV_yFugJQGUF7/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_light_saa_s_landing_page.module.css"; // plasmic-import: dyKzZyeMYu9cu5u9GQgcg2/projectcss
import sty from "./PlasmicFooterSection.module.css"; // plasmic-import: l_c1zAsdrtaRQG/css
import FacebooksvgIcon from "./icons/PlasmicIcon__Facebooksvg"; // plasmic-import: UY56u6wPtn7LBi/icon
import TwittersvgIcon from "./icons/PlasmicIcon__Twittersvg"; // plasmic-import: o7ofpohngu59Y9/icon
import InstagramsvgIcon from "./icons/PlasmicIcon__Instagramsvg"; // plasmic-import: ddHlv1UAM3sCpH/icon
import LinkedinsvgIcon from "./icons/PlasmicIcon__Linkedinsvg"; // plasmic-import: RuTMTPvKq6G-mX/icon
import logoFooterpngRwLuEkFb4YJztK from "./images/logoFooterpng.png"; // plasmic-import: RWLuEKFb4yJztK/picture

export const PlasmicFooterSection__VariantProps = new Array();

export const PlasmicFooterSection__ArgProps = new Array();

function PlasmicFooterSection__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjgVYFugJqguf7()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__azQh0)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__lnRsT)}>
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto"}
            displayMaxHeight={"35px"}
            displayMaxWidth={"229px"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: logoFooterpngRwLuEkFb4YJztK,
              fullWidth: 458,
              fullHeight: 70,
              aspectRatio: undefined
            }}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__kxFmg
            )}
          >
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            }
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__lyQc7)}>
            <FacebooksvgIcon
              className={classNames(projectcss.all, sty.svg__ywYb6)}
              role={"img"}
            />

            <TwittersvgIcon
              className={classNames(projectcss.all, sty.svg__r51Ij)}
              role={"img"}
            />

            <InstagramsvgIcon
              className={classNames(projectcss.all, sty.svg__jy1Uw)}
              role={"img"}
            />

            <LinkedinsvgIcon
              className={classNames(projectcss.all, sty.svg__jMLkG)}
              role={"img"}
            />
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__fzPxw)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__tpzPu
            )}
          >
            {"Menu"}
          </h4>

          <Button
            className={classNames("__wab_instance", sty.button__nw2Ab)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__hzrUu)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__rnQbj)}
                role={"img"}
              />
            }
          >
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___13CYl
              )}
            >
              {"How it work"}
            </a>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__ssZf)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___1NkDx)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__eEtr2)}
                role={"img"}
              />
            }
          >
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__ehMqj
              )}
            >
              {"Pricing"}
            </a>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__qdZx)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__v8Pvz)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__feqDt)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mLrUt
              )}
            >
              {"FAQs"}
            </div>
          </Button>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox___8NaRi)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__lk5J9
            )}
          >
            {"Help"}
          </h4>

          <Button
            className={classNames("__wab_instance", sty.button__kSr7V)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___1Hv6U)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__ivH99)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__e0Ti
              )}
            >
              {"Privacy and Policy"}
            </div>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button___06FO)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___2JTM)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__vx4XS)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tVnRt
              )}
            >
              {"Terms of Use"}
            </div>
          </Button>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__wyGqE)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__dOkdq
            )}
          >
            {"Company"}
          </h4>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__o8CJs
            )}
          >
            {"Lorem ipsum dolor sit amet, consectetur."}
          </div>

          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            className={classNames("__wab_instance", sty.textInput)}
          />

          <Button
            className={classNames("__wab_instance", sty.button__v0Ji)}
            color={"white"}
            small={
              hasVariant(globalVariants, "screen", "mobile") ? true : undefined
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__hLTen
              )}
            >
              {hasVariant(globalVariants, "screen", "mobile")
                ? "Subscribe"
                : "Subscribe"}
            </div>
          </Button>
        </div>
      </p.Stack>

      <div className={classNames(projectcss.all, sty.freeBox__jYq13)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__rp1Nh
          )}
        >
          {"Copyrights © 2022 All Rights Reserved by PlasmicApp"}
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "textInput", "textbox"],
  img: ["img"],
  textInput: ["textInput", "textbox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    textInput: makeNodeComponent("textInput"),
    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */
