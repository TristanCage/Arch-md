/*
 * Base By ɢᴏᴏᴅɴᴇꜱꜱ ᴛᴇᴄʜ 
 * Created On 11/10/2024
*/

const chalk = require("chalk");
const fs = require("fs");
require("dotenv").config(); 

//==================[ BOT SETTINGS ]==================\\
global.session     = process.env.SESSION_ID || "Arch_eccff74c1063c858a392e4c2bc85a2e9";                   // Session ID, To get Yours -- Visit https://arch-md.goodnesstechhost.xyz
global.owner       = process.env.OWNER_NUMBER || "967734339241";     // Owner number (for multiple, use comma-separated in your logic)
global.sudo        = process.env.SUDO || "967734339241";                          // Sudo users (string or logic processed array)
global.ownername   = process.env.OWNER_NAME || "ɢᴏᴏᴅɴᴇꜱꜱ ᴛᴇᴄʜ ";              // Owner name
global.botname     = process.env.BOT_NAME || "ᴀʀᴄʜ ᴍᴅ";                 // Bot name
global.author      = process.env.AUTHOR || "ɢᴏᴏᴅɴᴇꜱꜱ ᴛᴇᴄʜ ";                  // Sticker author
global.packname    = process.env.PACK_NAME || "Arch Md ²⁵";          // Sticker pack name
global.timezone    = process.env.TIME_ZONE || "Africa/Lagos";        // Default timezone
global.simbol      = process.env.SYMBOL || "♘";                      // Menu icon/symbol
global.thumb       = process.env.THUMB || "https://files.catbox.moe/bfzvlr.jpg,https://files.catbox.moe/n7wo5h.jpg,https://files.catbox.moe/sidp03.jpg,https://files.catbox.moe/yvb0et.jpg,https://files.catbox.moe/vu2qgl.jpg,https://files.catbox.moe/5rfbw9.jpg,https://files.catbox.moe/5hpljo.jpg,https://files.catbox.moe/o5hve8.jpg,https://files.catbox.moe/7383y9.jpg";
global.footer      = process.env.FOOTER || "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢᴏᴏᴅɴᴇꜱꜱ ᴛᴇᴄʜ*";                       // Footer for captions
global.warn        = process.env.WARN || "3";                        // Warning threshold
global.menutype    = process.env.MENU_TYPE || "";                    // Menu style
global.scan        = "https://arch-md.goodnesstechhost.xyz/";                      // Scan link

// --- UPDATED PREFIX LOGIC ---
// Get the prefix from environment variables
let prefixEnv = (process.env.PREFIX || ".").trim();

// Check if the prefix is "none" and set it to an empty string if it is
if (prefixEnv.toLowerCase() === 'none') {
  prefixEnv = '';
}

// Set the global prefix (this is the default, it can be overridden by DB in main.js)
global.prefix = prefixEnv.split(/\s+/);
// -------------------------


//==================[ BOT MESSAGES ]==================\\
global.msg = {
  succes:   "Success ✅",
  owner:    "❌ This feature is only for the owner",
  admin:    "❌ This feature is only for group admins",
  BotAdmin: "❌ The bot must be an admin to use this feature",
  group:    "❌ This command is for group chats only",
  private:  "❌ This command is for private chats only",
  bot:      "❌ This feature is only for the bot number",
  wait:     "⏳ Please wait...",
  ban:      "❌ You are banned. Contact the owner to be unbanned.",
  gcban:    "❌ This group is banned from using bot features"
};
