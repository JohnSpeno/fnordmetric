/**
 * This file is part of the "FnordMetric" project
 *   Copyright (c) 2011-2014 Paul Asmuth, Google Inc.
 *
 * FnordMetric is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License v3.0. You should have received a
 * copy of the GNU General Public License along with this program. If not, see
 * <http://www.gnu.org/licenses/>.
 */
#include <fnordmetric/util/signalhandler.h>
#include <signal.h>

namespace fnordmetric {
namespace util{

void SignalHandler::ignoreSIGHUP() {
  signal(SIGHUP, SIG_IGN);
}

void SignalHandler::ignoreSIGPIPE() {
  signal(SIGPIPE, SIG_IGN);
}

}
}
