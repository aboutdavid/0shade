# 0shade

No more throwaway emails.

## about
0shade is a project I made in about 3 hours to get rid of bad domains. There are three lists:

- domains.txt - List of email address domains to block. (user@**domain.com**)
- mx.txt - Some temporary providers have hundreds of domains to avoid filters, so this list goes after the email MX records.
- ips.txt - The lowest level, where we resolve the MX records back to the IP address, since a lot of temporary email providers have a whole bunch of MX record names, so the list program resolves back to the server IP.

It is reccomended to use the mx.txt and ips.txt lists as they are the most accurate. You'll need to resolve DNS to use these lists/

## contributing
See [CONTRIBUTING.md](https://github.com/aboutdavid/0shade/blob/master/CONTRIBUTING.md) :D

## license
The data is licensed under the ODbL v1.0 and the code and other files are licensed under the MIT license. See [LICENSE.md](https://github.com/aboutdavid/0shade/blob/master/LICENSE.md)

## examples
All examples are located in the `./examples` folder

## credit
[trentwiles/throwawayemails](https://github.com/trentwiles/ThrowawayEmails) for a majority of the data.

